class ChangeAgeDataTypeInUsers < ActiveRecord::Migration[7.0]
  def change
    change_column :users, :age, 'integer USING CAST(age AS integer)'
  end
end
