class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :content
      t.string :from
      t.string :address
      t.string :encrypted_token
      t.string :encrypted_private_key
      t.boolean :flagged, default: false

      t.timestamps
    end

    add_index :notes, :content
    add_index :notes, :from
    add_index :notes, :address
    add_index :notes, :encrypted_token

  end
end
