json.array!(@offers) do |offer|
  json.extract! offer, :id, :title, :description, :img
  json.url offer_url(offer, format: :json)
end
