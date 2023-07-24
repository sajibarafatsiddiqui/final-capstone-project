# Backend - Rails API

# Use the official Ruby image as the base image
FROM ruby:3.0.0

# Set the working directory in the container
WORKDIR ./backend

# Install dependencies
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

# Install bundler
RUN gem install bundler

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install gems
RUN bundle install --jobs 4 --retry 3

# Copy the rest of the application code
COPY . .

# Expose the port on which the Rails app will run
EXPOSE 3000

# Set environment variables for the Rails API
ENV RAILS_ENV production
ENV RAILS_LOG_TO_STDOUT true
ENV DATABASE_URL $DATABASE_URL

# Precompile assets
RUN bundle exec rails assets:precompile

# Run database migrations
RUN bundle exec rails db:migrate

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
