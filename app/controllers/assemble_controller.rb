class AssembleController < ApplicationController
	respond_to :js,:html
	def index
		respond_with()
	end
	def order
		OrderMailer.order_email.deliver_now!

		
    	redirect_to action:'result'
    end

	def upload
		canvas = params[:canvas]
		data = canvas[:canvascontent]
		
		@image_data = Base64.decode64(data['data:image/png;base64,'.length .. -1])

		@filepath =  Rails.root.join('tmp', 'film.png')


		File.open(@filepath, 'wb') do |f|
		  f.write @image_data
		end
		Tempimage.destroy_all()
		@image = Tempimage.new
		@image[:file] = @filepath
		@image.save
		redirect_to action: 'order'
	end
	def result
		@images = Tempimage.all
	end
end
