class SupportGood < ActiveRecord::Base
	validates :title, presence: true
	validates :avatar,
	attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
	attachment_size: { less_than: 5.megabytes }
	has_attached_file :avatar
def add_to_categories
	cat_array = self.categories.split(",")

	cat_array.each do |c|
		@categor = Category.find(c.to_i)
		temp = @categor.support_goods
		r = temp.to_s.split(",")
		r.push(self.id.to_i)
		@categor.support_goods = r.join(",")
		@categor.save
	end
end
def delete_from_categories
	cat_array = self.categories.split(",")
	cat_array.each do |c|
		@categor = Category.find(c.to_i)
		temp = @categor.support_goods
		r = temp.to_s.split(",")
		r.delete(self.id.to_s)
		@categor.support_goods = r.join(",")
		@categor.save
	end
	self.destroy
end
   #has_attached_file :avatar, :styles => { :medium => "400x", :thumb => ["200x", :png] }
end
