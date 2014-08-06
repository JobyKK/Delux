class SupportGoodsController < ApplicationController
  before_action :set_support_good, only: [:show, :edit, :update, :destroy]

  # GET /support_goods
  # GET /support_goods.json
  def index
    @support_goods = SupportGood.all
  end

  # GET /support_goods/1
  # GET /support_goods/1.json
  def show
  end

  # GET /support_goods/new
  def new
    @support_good = SupportGood.new
  end

  # GET /support_goods/1/edit
  def edit
  end

  def lol
  end	

  # POST /support_goods
  # POST /support_goods.json
  def create
    @support_good = SupportGood.new(support_good_params)
    
    respond_to do |format|
      if @support_good.save
        format.html { redirect_to @support_good, notice: 'Support good was successfully created.' }
        format.json { render :show, status: :created, location: @support_good }
      else
        format.html { render :new }
        format.json { render json: @support_good.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /support_goods/1
  # PATCH/PUT /support_goods/1.json
  def update
    respond_to do |format|
      if @support_good.update(support_good_params)
        format.html { redirect_to @support_good, notice: 'Support good was successfully updated.' }
        format.json { render :show, status: :ok, location: @support_good }
      else
        format.html { render :edit }
        format.json { render json: @support_good.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /support_goods/1
  # DELETE /support_goods/1.json
  def destroy
    @support_good.destroy
    respond_to do |format|
      format.html { redirect_to support_goods_url, notice: 'Support good was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_support_good
      @support_good = SupportGood.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def support_good_params
      params.require(:support_good).permit(:title, :short_description, :description, :avatar, :available, :price, :categories)
    end
end
