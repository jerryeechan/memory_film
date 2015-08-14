class AssembleController < ApplicationController
	respond_to :js,:html
	def index
		respond_with()
	end

	def upload
		canvas = params[:canvas]
		data = canvas[:canvascontent]
		
		image_data = Base64.decode64(data['data:image/png;base64,'.length .. -1])

		@file =  "#{Rails.root}/public/uploads/film.png"
		File.open(@file, 'wb') do |f|
		  f.write image_data
		end
		@image = Image.new
		@image[:file] = @file
		@image.save
		redirect_to :back
	end
end
