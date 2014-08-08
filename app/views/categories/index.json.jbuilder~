json.array!(@categories) do |category|
  json.extract! category, :id, :title, :sub_category, :super_category, :descritpion, :partners, :support_goods
  json.url category_url(category, format: :json)
end
