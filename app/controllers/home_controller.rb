class HomeController < ApplicationController
  
  def index
    @featured = Variant.where(:featured => true)
    @hot_deals = Variant.where(:hot_deal => true)
  end
  
  def about
  end
  
  def product
    @categories = ToolCategory.all.sort_by{ |var| var.name}
    if params[:id]
      @tool_category = ToolCategory.find(params[:id])
      @products = @tool_category.variants.sort_by{ |var| var.name}
    else
      @products = Variant.all.sort_by{ |var| var.name}
    end
  end
  
  def hot_deal
    @products = Variant.where(:hot_deal => true)
  end
  
  def contact
  end
  
  def send_email
    name = params[:name]
    email = params[:email]
    phone_no = params[:phone_no]
    message = params[:message]
    company = params[:company]
    EnquiryMailer.enquiry(name, email, phone_no, message, company).deliver_now
    flash[:notice] = "Email Sent Sucessfully!!"
    redirect_to "/contact_us"
  end

  def send_query
    product_name = params[:product_name]
    query = params[:query]
    name = params[:name]
    email = params[:email]
    phone_no = params[:phone_no]
    company = params[:company]
    person_type = params[:com_type]
    EnquiryMailer.product_enquiry(name, email, phone_no, product_name, query, company, person_type).deliver_now
    flash[:notice] = "Email Sent Sucessfully!!"
    redirect_to root_path
  end

  def search
    @variants = Variant.search(params[:search]).order("created_at DESC")
  end

end
