class CreateGoods < ActiveRecord::Migration
  def change
    create_table :goods do |t|
      t.string :title
      t.float :price
      t.text :short_description
      t.text :description
      t.boolean :available
      t.string :category
      t.string :produser

      t.timestamps
    end
  end
end
