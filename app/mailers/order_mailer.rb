class OrderMailer < ApplicationMailer
	default from: 'notifications@example.com'
 
  def order_email
  	attachments['film.png'] = File.read(Rails.root.join('tmp', 'film.png'))
    mail(to: 'pupu1416@yahoo.com.tw', subject: 'Test')
  end
end
