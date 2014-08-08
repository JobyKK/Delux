class Category < ActiveRecord::Base
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
