import React from 'react';

interface FieldStep2Props {
  onNext: () => void;
  onPrevious: () => void;
}

const FieldStep2: React.FC<FieldStep2Props> = ({ onNext, onPrevious }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Validar e salvar dados do passo 2
    onNext(); // Avançar para o próximo passo
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Endereço:
        <input type="text" name="address" required />
      </label>
      <button type="button" onClick={onPrevious}>Anterior</button>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default FieldStep2;