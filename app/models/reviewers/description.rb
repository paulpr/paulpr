module Reviewers
  class Description
    attr_accessor :client

    def initialize
      # establish connection
      @client = Octokit::Client.new(access_token: '3cf0baccd31be2b70be6ac684c0c4292c0ca68ad')
    end

    def review
      # validate_min_length(pull_request_info)
      pull_request_info
    end

    protected

    def pull_request_info
      # API call to get the latest PR
      puts @client.repo('paulpr/paulpr').rels[:pulls].inspect
    end

    def meets_min_length_requirement?
      # Check the description length
    end
  end
end
