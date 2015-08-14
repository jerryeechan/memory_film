class OrderForm < MailForm::Base
	attribute :file,    :attachment => true
	attributes :name
  def headers
    { :to => "pupu1416@yahoo.com.tw",
      :subject => "底片鑰ffff圈",
      :from => "haha@google.com.tw"
 	}
  end
end