require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game.rb")
require_relative("../card.rb")

class CardGameTest < MiniTest::Test
  def setup()
    @card1 = Card.new("heart", 3)
    @card2 = Card.new("spade", 1)
    cards = [@card1, @card2]
    @cardgame = CardGame.new(cards)
  end

  def test_number_of_cards()
    assert_equal(2, @cardgame.card_count())
  end

  def test_is_card_ace__true()
    assert_equal(true, @cardgame.check_for_ace(@card2))

  end

  def test_is_card_ace__false()
    assert_equal(false, @cardgame.check_for_ace(@card1))

  end

  def test_highest_card()
    assert_equal(@card1, @cardgame.highest_card(@card1, @card2))
  end

end
