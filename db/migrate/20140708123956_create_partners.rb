class CreatePartners < ActiveRecord::Migration
  def change
    create_table :partners do |t|
      t.string :title
      t.text :description
      t.text :img
      t.string :link

      t.timestamps
    end
  end
end
