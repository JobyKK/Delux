class AddPartnersColumnToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :partners, :string
  end
end
