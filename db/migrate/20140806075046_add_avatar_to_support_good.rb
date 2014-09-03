class AddAvatarToSupportGood < ActiveRecord::Migration
  def self.up
     add_attachment :support_goods, :avatar
  end
	
  def self.down
     remove_attachment :support_goods, :avatar
  end
end
