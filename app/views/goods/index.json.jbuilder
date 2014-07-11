json.array!(@goods) do |good|
  json.extract! good, :id, :title, :price, :img, :description, :available, :kind, :producer
  json.url good_url(good, format: :json)
end
