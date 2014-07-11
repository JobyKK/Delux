class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

# Is_admin check for admin  authentication
    def is_admin
	if current_admin 
    	true
	else
	redirect_to root_path
    	end
    end
end
