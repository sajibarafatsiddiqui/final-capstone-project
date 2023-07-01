require 'rails_helper'

RSpec.describe Car, type: :model do
  subject { Car.new(car_model: 'Mercedes Y3', rent_price: 3000, car_status: 'New', car_image: 'https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2021/09/2021-GLA.jpg') }

  before { subject.save }

  it 'Model must be present' do
    subject.car_model = nil
    expect(subject).to_not be_valid
  end

  it 'Model must be a string' do
    subject.car_model = 62
    expect(subject).to_not be_valid
  end

  it 'Rent Price must be present' do
    subject.rent_price = nil
    expect(subject).to_not be_valid
  end

  it 'Rent Price must be a number' do
    subject.rent_price = 'Hello'
    expect(subject).to_not be_valid
  end

  it 'Status must be present' do
    subject.car_status = nil
    expect(subject).to_not be_valid
  end

  it 'Status must be a string' do
    subject.car_status = 10.5
    expect(subject).to_not be_valid
  end

  it 'Image must be present' do
    subject.car_image = nil
    expect(subject).to_not be_valid
  end

  it 'Image must be a string' do
    subject.car_image = 12
    expect(subject).to_not be_valid
  end
end
