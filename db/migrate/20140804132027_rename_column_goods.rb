class RenameColumnGoods < ActiveRecord::Migration
def self.up
    rename_column :goods, :produser, :producer
  end

  def self.down
    rename_column :goods, :producer, :produser
  end
end
