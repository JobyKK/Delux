class AddShortDescriptionToOffers < ActiveRecord::Migration
  def change
    add_column :offers, :short_description, :string
  end
end
