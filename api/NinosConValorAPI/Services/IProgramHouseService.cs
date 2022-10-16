﻿using NinosConValorAPI.Models;

namespace NinosConValorAPI.Services
{
    public interface IProgramHouseService
    {
        Task<IEnumerable<ProgramHouseModel>> GetProgramHousesAsync();
    }
}
