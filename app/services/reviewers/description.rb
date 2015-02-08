module Reviewers
  class Description
    attr_accessor :client, :errors, :pr_id

    def initialize(pr_id)
      @client = Hub.get_pauls_client
      @pr_id = pr_id
      @errors = []
    end

    def review
      analyze_body(pull_request.body)
      comment_for_errors
    end

    protected

    def analyze_body(body)
      @errors << 'You need a body...' unless body.size > 0
    end

    def pull_request
      @pr ||= @client.pull_requests.get(user_name, repo_name, @pr_id).body
    end

    def issue_id
      pull_request.issue_url.last
    end

    def comment_for_errors
      @client.issues.comments.create(user_name, repo_name, issue_id, body: message)
    end

    def message
      "You don't have a description!"
    end
  end
end
