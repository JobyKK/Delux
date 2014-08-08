class AddSupportGoodsColumnToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :support_goods, :string
  end
end
