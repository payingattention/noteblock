require 'spec_helper'

describe NoteProof do
  let(:valid_hash) { "6f9e9570881e781db8c137c84c111a138e4a022e6b2def5e2a1589a802fe25f3" }
  let(:invalid_hash) { "this is obviously not correct" }

  context "Validations" do

    before(:each) do
      @note_proof = NoteProof.new
    end

    it "should not save without tx_hash" do
      @note_proof.tx_hash = nil
      expect(@note_proof.save).to eq(false)
    end

    it "should not save with an invalid tx_hash" do
      @note_proof.tx_hash = invalid_hash
      expect(@note_proof.save).to eq(false)
    end

    it "should otherwise save" do
      @note_proof.tx_hash = valid_hash
      expect(@note_proof.save).to eq(true)
    end
  end

  context "Associations" do
    it "should belong to Note"
  end
end
