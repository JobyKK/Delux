class CreateSupportGoods < ActiveRecord::Migration
  def change
    create_table :support_goods do |t|
      t.string :title
      t.text :short_description
      t.text :description
      t.boolean :available
      t.float :price
      t.string :categories

      t.timestamps
    end
  end
end
