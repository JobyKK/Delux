class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title
      t.string :sub_category
      t.string :super_category
      t.text :descritpion

      t.timestamps
    end
  end
end
