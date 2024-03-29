import React from 'react';

interface FieldStep3Props {
  onPrevious: () => void;
  onClose: () => void;
}

const FieldStep3: React.FC<FieldStep3Props> = ({ onPrevious, onClose }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validar e salvar dados do passo 3
    // Fechar o modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Outro campo:
        <input type="text" name="otherField" required />
      </label>
      <button type="button" onClick={onPrevious}>Anterior</button>
      <button type="submit">Finalizar</button>
    </form>
  );
};

export default FieldStep3;