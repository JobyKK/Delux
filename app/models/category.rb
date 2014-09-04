class Category < ActiveRecord::Base
	validates :avatar,
	attachment_content_type: { content_type: /\Aimage\/.*\Z/ },
	attachment_size: { less_than: 5.megabytes }
	has_attached_file :avatar , :path => ":rails_root/public/system/categories/avatars/:style/:filename", :url => "/:style/:filename"
def destroy_sub 
	if self.super_category != ""
		@categor = Category.find(self.super_category.to_i)
		temp = @categor.sub_category
		r = temp.to_s.split(",")
		r.delete(self.id.to_s)
		if r != [] 
			temp = r.join(",") + ","
		else
			temp = r.join(",")
		end
		@categor.sub_category = temp
    	        @categor.save
	end
	if self.support_goods != nil
		supp_array = self.support_goods.split(",")
		
		supp_array.each do |s|
			@support_good = SupportGood.find(s.to_i)
			temp = @support_good.categories
			r = temp.to_s.split(",")
			r.delete(self.id.to_s)
			@support_good.categories = r.join(",")
			@support_good.save
		end
	end
	self.destroy
		
    end
end
