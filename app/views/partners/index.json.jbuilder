json.array!(@list) do |partner|
  json.extract! partner, :id, :title, :description
  json.url partner_url(partner, format: :json)
end
