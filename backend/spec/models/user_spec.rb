require 'rails_helper'

RSpec.describe User, type: :model do
  subject { User.new(first_name: 'Bob', last_name: 'Sullivan', gender: 'Male', age: 40, email: 'sully@gmail.com') }

  before { subject.save }

  it 'First Name should be Present and of type String' do
    subject.first_name = nil
    expect(subject).to_not be_valid
    subject.first_name = 10
    expect(subject).to_not be_valid
  end

  it 'Last Name should be Present and of type String' do
    subject.last_name = nil
    expect(subject).to_not be_valid
    subject.last_name = 10
    expect(subject).to_not be_valid
  end

  it 'Age should be Present and of type Integer' do
    subject.age = nil
    expect(subject).to_not be_valid
    subject.age = 'welcome'
    expect(subject).to_not be_valid
  end

  it 'Gender should be Present and of type String' do
    subject.gender = nil
    expect(subject).to_not be_valid
    subject.gender = 17
    expect(subject).to_not be_valid
  end

  it 'Email should be Present and of type String' do
    subject.email = nil
    expect(subject).to_not be_valid
    subject.email = 247
    expect(subject).to_not be_valid
  end
end
