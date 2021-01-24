class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  validates :self_introduction, length: { maximum: 500 }
  enum gender: {man: 0, woman: 1}

  mount_uploader :image, ImageUploader

  def update_without_current_password(params, *options)

    if params[:current_password].blank?
      params.delete(:current_password)
    end

    result = update(params, *options)
    clean_up_passwords
    result
  end
end
