class Emailer < ActionMailer::Base

default from: 'service@delux.com.ua'
def sendmail(email_params)
	@address = email_params[:address]
	@name = email_params[:name]
	@content = email_params[:content]
	mail(to: @address, subject: @name) do |f|
		f.text { render text: 'HEllo'}
	end
end
end
