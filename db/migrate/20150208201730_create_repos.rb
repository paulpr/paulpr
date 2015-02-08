class CreateRepos < ActiveRecord::Migration
  def change
    create_table :repos do |t|
      t.string :repo
      t.string :owner
      t.integer :hook_id
      t.references :user

      t.timestamps null: false
    end
  end
end
