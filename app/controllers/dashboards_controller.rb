class DashboardsController < ApplicationController
  def repos
    client = Hub.get_user_client(current_user.github_token)
    @repos = client.repos.list
  end
end
