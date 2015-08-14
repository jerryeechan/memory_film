class CreateTempimages < ActiveRecord::Migration
  def change
    create_table :tempimages do |t|
      t.string :file

      t.timestamps null: false
    end
  end
end
