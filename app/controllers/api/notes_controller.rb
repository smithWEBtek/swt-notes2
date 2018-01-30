class Api::NotesController < ApplicationController
 before_action :set_note, only: [:show, :update, :destroy, :resources]

  def index
    @notes = Note.all
    render json: @notes
  end

  def show
    render json: @note
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: { message: 'note NOT created' }}
    end
  end

  def update
    @note.update(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: { message: 'note NOT updated' }}
    end
  end

  def destroy
    @note.destroy
  end
  
  private
    def set_note
      @note = Note.find_by_id(params[:id])
      end
    def note_params
      params.require(:note).permit(:title, :body)
    end
end

