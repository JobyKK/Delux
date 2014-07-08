class CreateGoods < ActiveRecord::Migration
  def change
    create_table :goods do |t|
      t.string :title
      t.float :price
      t.text :img
      t.text :description
      t.boolean :available
      t.string :kind
      t.string :producer

      t.timestamps
    end
  end
end
