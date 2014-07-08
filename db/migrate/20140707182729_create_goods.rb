class CreateGoods < ActiveRecord::Migration
  def change
    create_table :goods do |t|
      t.string :name
      t.float :price
      t.text :img
      t.text :description
      t.boolean :available
      t.string :type
      t.string :producer

      t.timestamps
    end
  end
end
