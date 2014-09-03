require 'test_helper'

class SupportGoodsControllerTest < ActionController::TestCase
  setup do
    @support_good = support_goods(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:support_goods)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create support_good" do
    assert_difference('SupportGood.count') do
      post :create, support_good: { available: @support_good.available, categories: @support_good.categories, description: @support_good.description, price: @support_good.price, short_description: @support_good.short_description, title: @support_good.title }
    end

    assert_redirected_to support_good_path(assigns(:support_good))
  end

  test "should show support_good" do
    get :show, id: @support_good
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @support_good
    assert_response :success
  end

  test "should update support_good" do
    patch :update, id: @support_good, support_good: { available: @support_good.available, categories: @support_good.categories, description: @support_good.description, price: @support_good.price, short_description: @support_good.short_description, title: @support_good.title }
    assert_redirected_to support_good_path(assigns(:support_good))
  end

  test "should destroy support_good" do
    assert_difference('SupportGood.count', -1) do
      delete :destroy, id: @support_good
    end

    assert_redirected_to support_goods_path
  end
end
