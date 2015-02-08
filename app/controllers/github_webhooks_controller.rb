class GithubWebhooksController < ActionController::Base
  include GithubWebhook::Processor

  def push(payload)
    # TODO: handle push webhook
    #logger.info("should do something with a push payload")# {payload}")

  end 

  def pull_request(payload)

    Reviewers::Description.new(payload['number']).review


  end 

  def issue_comment(payload)
    

  end


  def webhook_secret(payload)
    '4185945499'
  end
end