json.array!(@goods) do |good|
  json.extract! good, :id, :title, :price, :short_description, :description, :available, :category, :producer
  json.url good_url(good, format: :json)
end
