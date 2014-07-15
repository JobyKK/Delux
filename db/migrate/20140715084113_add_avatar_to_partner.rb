class AddAvatarToPartner < ActiveRecord::Migration
    def self.up
      add_attachment :partners, :avatar
    end

    def self.down
      remove_attachment :partners, :avatar
    end
end
