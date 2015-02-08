class Hub
  def self.get_pauls_client
    Github.new(login: ENV['PAULS_USERNAME'], password: ENV['PAULS_PASSWORD'])
  end

  def self.get_user_client(token)
    Github.new(oauth_token: token)
  end
end
