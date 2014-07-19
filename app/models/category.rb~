class Category < ActiveRecord::Base
def destroy_sub 
	if self.super_category != ""
		@categor = Category.find(self.super_category)
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
	self.destroy
		
    end
end
