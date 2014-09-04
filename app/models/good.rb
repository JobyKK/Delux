class Good < ActiveRecord::Base
  include Bootsy::Container
   #accepts_nested_attributes_for :avatar
	validates :title, presence: true
	validates :avatar,
	attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
	attachment_size: { less_than: 5.megabytes }
	has_attached_file :avatar, :path => ":rails_root/public/system/goods/avatars/:style/:filename", :url => "/:style/:filename"
   #has_attached_file :avatar, :styles => { :medium => "400x", :thumb => ["200x", :png] }
end
