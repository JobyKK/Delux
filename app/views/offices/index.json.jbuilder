json.array!(@offices) do |office|
  json.extract! office, :id, :title, :address, :numbers
  json.url office_url(office, format: :json)
end
