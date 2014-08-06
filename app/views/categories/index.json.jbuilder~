json.array!(@categories) do |category|
  json.extract! category, :id, :title, :sub_category, :super_category, :descritpion
  json.url category_url(category, format: :json)
end
