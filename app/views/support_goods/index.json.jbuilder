json.array!(@support_goods) do |support_good|
  json.extract! support_good, :id, :title, :short_description, :description, :available, :price, :categories, :avatar_file_name
  json.url support_good_url(support_good, format: :json)
end
