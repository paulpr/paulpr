class ReposController < ApplicationController
  def index
    client = Hub.get_user_client(current_user.github_token)
    @repos = client.repos.list
  end

  def activate
    # Set up the webhook
    hook = Hub.get_user_client(current_user.github_token).repos.hooks.create(params[:owner], params[:repo],
      name: 'web',
      active: true,
      events: ['pull_request'],
      config: {
        content_type: 'json',
        url: github_webhooks_url
      }
    )

    # Add it to the database
    current_user.repos.create(
      repo: params[:repo],
      owner: params[:owner],
      hook_id: hook[:id]
    )

    redirect_to repos_path
  end

  def deactivate
    repo = current_user.repos.find(params[:id])
    Hub.get_user_client(current_user.github_token).repos.hooks.delete(repo.owner, repo.repo, repo.hook_id)
    repo.destroy
    redirect_to repos_path
  end
end
